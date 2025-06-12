# organize_project.py
# A comprehensive script to organize the Autaxys research project directory.
# This script is idempotent and can be run safely multiple times.

import os
import shutil
import re

# --- CONFIGURATION ---
# Define the root path of the Autaxys project
ROOT_PATH = 'projects/AUTX'
PROJECTS_ROOT = os.path.join(ROOT_PATH, '02_Research_Pillars_And_Projects')
WORKSPACE_PATH = os.path.join(ROOT_PATH, '_workspace')
NEW_ARCHIVE_PATH = os.path.join(ROOT_PATH, '99_Archive')

# --- HELPER FUNCTIONS ---

def sanitize_filename(filename):
    """Cleans up filenames by replacing spaces and standardizing."""
    name = filename.replace(' ', '_')
    # Allow alphanumeric, underscore, dash, dot. Remove others.
    name = re.sub(r'[^\w.\-]', '', name)
    return name

def ensure_dirs(dir_list):
    """Ensures a list of directories exist, creating them if necessary."""
    for d in dir_list:
        os.makedirs(d, exist_ok=True)

def move_file(old_path, new_dir, message_prefix, new_filename=None):
    """Moves a file to a new directory with a sanitized name and prints a message."""
    if not os.path.exists(old_path):
        return
    
    base_filename = new_filename if new_filename else os.path.basename(old_path)
    sanitized_name = sanitize_filename(base_filename)
    new_path = os.path.join(new_dir, sanitized_name)

    # To avoid errors, ensure the destination file doesn't already exist.
    # This can happen if two files sanitize to the same name.
    if os.path.exists(new_path):
        print(f"  [SKIPPED] Destination '{new_path}' already exists.")
        return

    print(f"  {message_prefix} Moving '{os.path.basename(old_path)}' to '{new_dir}'")
    shutil.move(old_path, new_path)

# --- CORE LOGIC FUNCTIONS ---

def organize_project_internals(project_path):
    """Applies the standard internal structure to a single project folder."""
    print(f"\n--- Organizing internals of: {os.path.basename(project_path)} ---")
    
    # Define standard subdirectories
    dirs_to_create = {
        "deliverables": os.path.join(project_path, 'Deliverables'),
        "source": os.path.join(project_path, 'Source_Material'),
        "drafts": os.path.join(project_path, 'Working_Drafts'),
        "sows": os.path.join(project_path, 'Statements_Of_Work'),
    }
    ensure_dirs(dirs_to_create.values())

    files_in_project = [f for f in os.listdir(project_path) if os.path.isfile(os.path.join(project_path, f))]

    for filename in files_in_project:
        filepath = os.path.join(project_path, filename)
        
        # Rule 1: Move SOWs
        if 'SOW' in filename:
            move_file(filepath, dirs_to_create["sows"], "[SOW]")
            continue
            
        # Rule 2: Move canonical deliverables (e.g., v1.9, reports, final specs)
        is_deliverable = 'Report' in filename or 'Results' in filename or 'Spec_V1' in filename or 'v1.9' in filename
        if 'D-P' in filename or is_deliverable:
             # Exception: '-review' files are drafts
            if '-review' in filename:
                move_file(filepath, dirs_to_create["drafts"], "[DRAFT]")
            else:
                move_file(filepath, dirs_to_create["deliverables"], "[DELIVERABLE]")
            continue

        # Rule 3: Move conceptual/source material
        if 'Conceptual-AGE-Expansion' in filename or 'CCD-TM' in filename:
            move_file(filepath, dirs_to_create["source"], "[SOURCE]")
            continue
            
        # Default catch-all for any other files left in the root of the project
        move_file(filepath, dirs_to_create["source"], "[SOURCE_DEFAULT]")

    print(f"✓ Finished organizing {os.path.basename(project_path)}")


def main():
    """Main function to orchestrate the entire project reorganization."""
    if not os.path.isdir(ROOT_PATH):
        print(f"Error: Root directory '{ROOT_PATH}' not found.")
        return

    print("--- Starting Autaxys Project Reorganization ---")

    # 1. Create all necessary top-level target directories
    archive_subdirs = [
        os.path.join(NEW_ARCHIVE_PATH, 'old_master_plans'),
        os.path.join(NEW_ARCHIVE_PATH, 'session_logs_and_states'),
        os.path.join(NEW_ARCHIVE_PATH, 'precursor_frameworks'),
        os.path.join(NEW_ARCHIVE_PATH, 'old_governance_docs'),
        os.path.join(NEW_ARCHIVE_PATH, 'unsorted_notes')
    ]
    workspace_subdirs = [
        os.path.join(WORKSPACE_PATH, 'project_working_files')
    ]
    ensure_dirs([ROOT_PATH, PROJECTS_ROOT, WORKSPACE_PATH, NEW_ARCHIVE_PATH] + archive_subdirs + workspace_subdirs)
    print("✓ Ensured all target directories exist.")

    # 2. First Pass: Global cleanup and archival
    print("\n--- Pass 1: Global Cleanup and Archiving ---")
    for dirpath, _, filenames in os.walk(ROOT_PATH):
        # Skip processing the new directories we are moving files into
        if NEW_ARCHIVE_PATH in dirpath or WORKSPACE_PATH in dirpath:
            continue

        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            
            # Rule: Move all temporary/log/AI-generated files to a workspace subfolder
            is_temp_file = (filename.endswith('.json') or 'CAT_Export' in filename or 
                            filename.endswith('.zip') or re.match(r'^\d+_files_combined', filename) or
                            re.match(r'^_?\d+.*', filename) or 'rewind_iter' in filename)
            if is_temp_file:
                move_file(filepath, workspace_subdirs[0], "[WORKSPACE]")
                continue

            # Rule: Archive old Master Plans
            if 'Master_Plan' in filename and 'v2.0' not in filename:
                move_file(filepath, archive_subdirs[0], "[ARCHIVE_PLAN]")
                continue
    
    # 3. Second Pass: Internal organization of each project folder
    print("\n--- Pass 2: Organizing Individual Project Folders ---")
    project_folders_to_organize = []
    for dirpath, dirnames, _ in os.walk(PROJECTS_ROOT):
        for dirname in dirnames:
            if dirname.startswith('Project_6'):
                project_folders_to_organize.append(os.path.join(dirpath, dirname))

    for project_path in project_folders_to_organize:
        organize_project_internals(project_path)

    # 4. Final Cleanup: Handle the old ARCHIVE folder and .gitignore
    print("\n--- Pass 3: Final Cleanup ---")
    old_archive_path = os.path.join(ROOT_PATH, 'ARCHIVE')
    if os.path.exists(old_archive_path):
        print("Processing old 'ARCHIVE' directory...")
        # We move its contents to the new archive, then remove it.
        # This is a fallback in case the first pass missed anything.
        for item in os.listdir(old_archive_path):
            item_path = os.path.join(old_archive_path, item)
            move_file(item_path, os.path.join(NEW_ARCHIVE_PATH, 'unsorted_notes'), "[ARCHIVE_UNSORTED]")
        
        try:
            if not os.listdir(old_archive_path):
                os.rmdir(old_archive_path)
                print("✓ Removed empty old 'ARCHIVE' directory.")
        except OSError as e:
            print(f"Warning: Could not remove old 'ARCHIVE' directory: {e}. It may not be empty. Please review manually.")

    # Create/update .gitignore
    gitignore_path = os.path.join(os.path.dirname(ROOT_PATH), '.gitignore')
    gitignore_content = """
# Workspace for temporary files, logs, and AI outputs
_workspace/

# Node.js dependencies
node_modules/

# Python cache
__pycache__/
*.pyc

# IDE-specific folders
.idea/
.vscode/

# OS-specific files
.DS_Store
Thumbs.db
"""
    with open(gitignore_path, 'w') as f:
        f.write(gitignore_content.strip())
    print(f"✓ Created/Updated .gitignore at '{gitignore_path}'")

    print("\n--- Reorganization Complete! ---")
    print("\nNext Steps:")
    print("1. Review the new directory structure. Check '_workspace' and '99_Archive'.")
    print("2. Since Zoottelkeeper updates automatically, your Obsidian vault should reflect the changes.")
    print("3. Commit the changes to your version control system.")

if __name__ == '__main__':
    main()
