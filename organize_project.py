# ==============================================================================
#
#   AUTAXYS PROJECT ORGANIZATION SCRIPT (organize_project.py)
#   Version: 2.3 (Corrected directory check)
#   Author: Rowan Brad Quni (with Autologos Assistance)
#
# ------------------------------------------------------------------------------
#
#   ** PURPOSE **
#   This script automatically organizes the Autaxys research project directory
#   into a clean, standardized, and WBS-aligned structure. It is designed to
#   be idempotent, meaning it can be run safely multiple times without
#   creating duplicates or causing errors. It will only move files that are
#   not already in their correct locations.
#
# ------------------------------------------------------------------------------
#
#   ** HOW TO EXECUTE **
#
#   1.  **Navigate to the Project Root:**
#       Open your terminal or command prompt and change your directory to the
#       root of the Autaxys project.
#
#       cd /path/to/your/projects/AUTX
#
#   2.  **Run the Script:**
#       Execute the script using Python.
#
#       python3 organize_project.py
#
#   3.  **Review and Commit:**
#       After the script finishes, review the new, clean directory structure.
#       Commit the changes to your version control system (e.g., Git).
#
# ------------------------------------------------------------------------------
#
#   ** USEFUL COMMANDS (for future reference) **
#
#   To generate a clean directory tree text file (useful for providing
#   context or debugging), run the following command from the project root:
#
#   **For macOS / Linux:**
#   tree -a -I ".git|node_modules|__pycache__|_workspace|99_Archive" > autx_directory_tree.txt
#
# ==============================================================================

import os
import shutil
import re

# --- CONFIGURATION ---
ROOT_PATH = os.path.abspath('.')
OLD_PROJECTS_ROOT = os.path.join(ROOT_PATH, '02_Research_Pillars_And_Projects')
NEW_PHASE_1_ROOT = os.path.join(ROOT_PATH, '01_RESEARCH_PHASE_1')
WORKSPACE_PATH = os.path.join(ROOT_PATH, '_workspace')
NEW_ARCHIVE_PATH = os.path.join(ROOT_PATH, '99_Archive')

PROJECT_MAP = {
    "Project_6.1_AFKB_Synthesis": "P6.1_Foundational_Synthesis",
    "Project_6.2_Formal_Modeling": "P6.2_Formal_Modeling",
    "P6.5_Methodology_Solidification": "P6.5_Methodology",
    "Project_6.7_Autaxic_Table_Of_Patterns": "P6.7_Autaxic_Table"
}

# --- HELPER FUNCTIONS ---

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def move_item(old_path, new_dir, message_prefix):
    if not os.path.exists(old_path):
        return

    base_name = os.path.basename(old_path)
    new_path = os.path.join(new_dir, base_name)

    if os.path.abspath(old_path) == os.path.abspath(new_path):
        return

    if os.path.exists(new_path):
        if os.path.isdir(new_path):
             print(f"  [MERGING] Contents of '{os.path.relpath(old_path, ROOT_PATH)}' into existing '{os.path.relpath(new_path, ROOT_PATH)}'")
             for item in os.listdir(old_path):
                 move_item(os.path.join(old_path, item), new_path, message_prefix)
             try:
                 if not os.listdir(old_path): os.rmdir(old_path)
             except OSError: pass
             return
        else:
            print(f"  [SKIPPED] Destination file '{new_path}' already exists. Cannot move '{base_name}'.")
            return

    print(f"  {message_prefix} Moving '{os.path.relpath(old_path, ROOT_PATH)}' to '{os.path.relpath(new_dir, ROOT_PATH)}'")
    shutil.move(old_path, new_path)

# --- CORE LOGIC ---

def create_target_structure():
    print("--- Creating target directory structure ---")
    ensure_dir(os.path.join(ROOT_PATH, '00_PROGRAM_MANAGEMENT'))
    ensure_dir(os.path.join(ROOT_PATH, '00_PROGRAM_MANAGEMENT', '03_Autologos_System'))
    ensure_dir(os.path.join(ROOT_PATH, '01_FOUNDATIONAL_DOCUMENTS'))
    ensure_dir(NEW_PHASE_1_ROOT)
    
    for proj_name in set(PROJECT_MAP.values()):
        proj_path = os.path.join(NEW_PHASE_1_ROOT, proj_name)
        ensure_dir(proj_path)
        ensure_dir(os.path.join(proj_path, 'Deliverables'))
        ensure_dir(os.path.join(proj_path, 'Source_Material'))
        ensure_dir(os.path.join(proj_path, 'Working_Drafts'))
        ensure_dir(os.path.join(proj_path, 'Statements_Of_Work'))
        ensure_dir(os.path.join(proj_path, 'Computational_Models'))

    ensure_dir(WORKSPACE_PATH)
    ensure_dir(NEW_ARCHIVE_PATH)
    print("✓ Target structure created.")

def organize_files():
    print("\n--- Organizing all project files ---")
    all_items = []
    for dirpath, dirnames, filenames in os.walk(ROOT_PATH, topdown=True):
        dirnames[:] = [d for d in dirnames if d not in ['_workspace', '99_Archive', '.git', 'node_modules', '__pycache__']]
        
        for item in filenames + dirnames:
            all_items.append(os.path.join(dirpath, item))

    for item_path in all_items:
        if not os.path.exists(item_path):
            continue

        item_name = os.path.basename(item_path)
        if item_name == 'organize_project.py': continue

        is_workspace_file = ('.json' in item_name or '.js.map' in item_name or 
                             '.parcel-cache' in item_name or 'dist' in item_name or
                             'rewind_iter' in item_name or 'product_distillation' in item_name)
        if is_workspace_file:
            move_item(item_path, WORKSPACE_PATH, "[WORKSPACE]")
            continue

        if 'Master_Plan' in item_name or 'WBS_Autaxys' in item_name:
            move_item(item_path, os.path.join(ROOT_PATH, '00_PROGRAM_MANAGEMENT'), "[PLAN]")
            continue
        
        if 'Autologos' in item_name or 'AUTX_Autologos' in item_name:
            move_item(item_path, os.path.join(ROOT_PATH, '00_PROGRAM_MANAGEMENT', '03_Autologos_System'), "[AUTOLOGOS]")
            continue

        if 'Comparative_Analysis' in item_name or 'A1_ConceptualPaper' in item_name:
            move_item(item_path, os.path.join(ROOT_PATH, '01_FOUNDATIONAL_DOCUMENTS'), "[FOUNDATIONAL]")
            continue
        
        target_proj_folder = None
        for old_name, new_name in PROJECT_MAP.items():
            if old_name in item_path:
                target_proj_folder = os.path.join(NEW_PHASE_1_ROOT, new_name)
                break
        
        if not target_proj_folder and "P6.5_Methodology" in item_path:
            target_proj_folder = os.path.join(NEW_PHASE_1_ROOT, 'P6.5_Methodology')

        if target_proj_folder:
            if item_name in ['mvu1-sim', 'mvu2-sim']:
                move_item(item_path, os.path.join(target_proj_folder, 'Computational_Models'), "[CODE]")
            elif os.path.isfile(item_path):
                if 'SOW' in item_name:
                    move_item(item_path, os.path.join(target_proj_folder, 'Statements_Of_Work'), "[SOW]")
                elif 'D-P' in item_name or 'Report' in item_name or 'Results' in item_name or 'Framework_v' in item_name:
                    if '-review' in item_name:
                        move_item(item_path, os.path.join(target_proj_folder, 'Working_Drafts'), "[DRAFT]")
                    else:
                        move_item(item_path, os.path.join(target_proj_folder, 'Deliverables'), "[DELIVERABLE]")
                elif ('Conceptual' in item_name or 'CCD-TM' in item_name or 'product_refinement' in item_name or 
                      'product_exploratory' in item_name):
                    move_item(item_path, os.path.join(target_proj_folder, 'Source_Material'), "[SOURCE]")
                elif item_name.endswith(('.py.md', '.py', '.ts', '.js', '.html')):
                    move_item(item_path, os.path.join(target_proj_folder, 'Computational_Models'), "[CODE]")
                elif not item_name.startswith('_'):
                    move_item(item_path, os.path.join(target_proj_folder, 'Source_Material'), "[SOURCE_DEFAULT]")
            continue

        if os.path.isfile(item_path) and not (item_name.startswith('_') and item_name.endswith('.md')) and item_name not in ['LICENSE.md', 'README.md', 'Proposed_Directory_Structure.md', 'autx_directory_tree.txt']:
            move_item(item_path, NEW_ARCHIVE_PATH, "[ARCHIVE_UNSORTED]")

def cleanup_old_structure():
    """Aggressively removes the old, now-empty directory structure."""
    print("\n--- Cleaning up old directory structure ---")
    
    if os.path.exists(OLD_PROJECTS_ROOT):
        print(f"  [CLEANUP] Removing old structure root: '{os.path.relpath(OLD_PROJECTS_ROOT, ROOT_PATH)}'")
        try:
            shutil.rmtree(OLD_PROJECTS_ROOT)
            print("  ✓ Successfully removed old project tree.")
        except OSError as e:
            print(f"  [ERROR] Could not remove '{OLD_PROJECTS_ROOT}': {e}. It might contain files that were not moved. Please review manually.")

    old_foundational_path = os.path.join(ROOT_PATH, '01_Foundational_Documents')
    if os.path.exists(old_foundational_path):
         try:
            if not os.listdir(old_foundational_path):
                os.rmdir(old_foundational_path)
         except OSError: pass

def generate_gitignore():
    print("\n--- Generating .gitignore ---")
    gitignore_path = os.path.join(ROOT_PATH, '.gitignore')
    gitignore_content = """
# Workspace for temporary files, logs, and AI outputs
_workspace/

# Archive for old files
99_Archive/

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

# Build artifacts
dist/
.parcel-cache/
"""
    with open(gitignore_path, 'w') as f:
        f.write(gitignore_content.strip())
    print(f"✓ Created/Updated .gitignore at '{os.path.relpath(gitignore_path, ROOT_PATH)}'")

def main():
    """Main function to orchestrate the entire project reorganization."""
    # CORRECTED CHECK: Look for a folder that exists BEFORE organization.
    if not os.path.exists('02_Research_Pillars_And_Projects'):
        # Also check if the NEW structure already exists, in which case it's already been run.
        if os.path.exists('01_RESEARCH_PHASE_1'):
            print("Project appears to be already organized. Exiting.")
            return
        print("Error: This script must be run from the 'projects/AUTX' directory (could not find '02_Research_Pillars_And_Projects' folder).")
        return

    print("="*50)
    print("  AUTAXYS PROJECT REORGANIZATION SCRIPT v2.3")
    print("="*50)

    create_target_structure()
    organize_files()
    cleanup_old_structure()
    generate_gitignore()

    print("\n--- Reorganization Complete! ---")
    print("\nYour project directory is now clean. The old '02_Research_Pillars_And_Projects' folder has been removed.")
    print("Please review the new structure and commit the changes to your version control system.")

if __name__ == '__main__':
    main()