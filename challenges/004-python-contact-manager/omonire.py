# Engineered by Omonire (github.com/omonire)
# Challenge 004 - Python Contact Manager
# A simple command-line contact book using a dictionary.

# The contact book: name -> phone number
contacts = {}


# Add a new contact (or update an existing one)
def add_contact():
    name = input("Enter contact name: ").strip()
    phone = input("Enter phone number: ").strip()

    # Do not allow empty values
    if name == "" or phone == "":
        print("Name and phone cannot be empty.")
        return

    contacts[name] = phone
    print("Saved " + name + ".")


# Show every contact in the book
def view_contacts():
    if len(contacts) == 0:
        print("No contacts yet.")
        return

    print("All contacts:")
    for name in contacts:
        print("  " + name + " -> " + contacts[name])


# Find a contact by name
def search_contact():
    name = input("Search name: ").strip()

    if name in contacts:
        print(name + " -> " + contacts[name])
    else:
        print("No contact named " + name + ".")


# Remove a contact by name
def delete_contact():
    name = input("Delete name: ").strip()

    if name in contacts:
        del contacts[name]
        print("Deleted " + name + ".")
    else:
        print("No contact named " + name + ".")


# Show the menu
def show_menu():
    print("")
    print("--- Contact Book ---")
    print("1. Add contact")
    print("2. View all contacts")
    print("3. Search contact")
    print("4. Delete contact")
    print("5. Exit")


# Keep running until the user chooses to exit
while True:
    show_menu()
    choice = input("Choose an option (1-5): ").strip()

    if choice == "1":
        add_contact()
    elif choice == "2":
        view_contacts()
    elif choice == "3":
        search_contact()
    elif choice == "4":
        delete_contact()
    elif choice == "5":
        print("Goodbye!")
        break
    else:
        print("Invalid choice, try again.")
