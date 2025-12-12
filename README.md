
# Project Name: BookCourier – Library-to-Home Delivery System

# From Dashboard, you can click the logo and website name if you want to back to Home page

# If You buy a book (with payment), then you will able to post it's Review


## Purpose
BookCourier is a library delivery management system that allows users to request book pickup or delivery from nearby libraries. It helps students, researchers, and readers borrow and return books without visiting the library physically.

## Live URL: https://bookcourier-fa15f.web.app/ 


## Key Features
- User authentication with email/password and Google login
- Responsive design with light/dark mode toggle
- Home page with banner sliders, latest books, coverage map, and promotional sections
- All Books page with search and sort functionality
- Book Details page with order modal, wishlist, and review/rating system
- User Dashboard: My Orders, My Profile, Invoices, My Wishlist
- Librarian Dashboard: Add Book, My Books, Manage Orders
- Admin Dashboard: Manage Users, Manage Books
- JWT-protected routes for secure access
- Skeleton loaders for better UX

## NPM Packages Used
- react
- react-hook-form
- axios
- firebase
- tailwindcss
- @tanstack/react-query
- react-icons

# Important Notes:
* A user can have only one role at a time — user, admin, or librarian.
* If a librarian is assigned the admin role, their new role becomes admin, and the previous librarian role will be automatically removed.
* Similarly, if an admin is assigned the librarian role, their new role becomes librarian, and the previous admin role will be removed.

** Sanaya Sabrin is a permanent admin.
** Sanaya Sabrin's role cannot be changed.
** Sanaya Sabrin cannot be assigned the librarian role under any circumstance.
** Sanaya Sabrin's admin role cannot be removed
