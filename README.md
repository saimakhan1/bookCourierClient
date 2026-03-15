# Project Name: BookCourier – Library-to-Home Delivery System

# From Dashboard, you can click the logo and website name if you want to go back to the Home page.

# If you buy a book (with payment), then you will be able to post its Review.

---

## Purpose

BookCourier is a library delivery management system that allows users to request book pickup or delivery from nearby libraries. It helps students, researchers, and readers borrow and return books without visiting the library physically.

---

## Live URL

[https://bookcourier-fa15f.web.app/](https://bookcourier-fa15f.web.app/)

---

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

---

## **New Features Added (March 2026, PH EndGame 5th Week Sprint)**

1. **AI Book Assistant**
   - A chatbot on the homepage that interacts with users and gives personalized book suggestions.
   - Makes the platform interactive and smarter, enhancing user engagement.

2. **Global Book Explorer**
   - Users can search millions of books worldwide via the Open Library API.
   - Works independently from the existing backend database, providing unlimited book discovery.
   - Uses **React Query** for efficient API fetching and caching, improving performance and reducing repeated network calls.

3. **Mood Explorer**
   - Users can explore books based on their mood or preferred genre.
   - Encourages personalized recommendations and engagement.
   - Built as a responsive card-based interactive section on the homepage.

---

## **New Technology Integrated**

**Lottie Animations**

- Used **lottie-react** to add animated illustrations to the homepage.
- The animation reacts dynamically on scroll and creates a modern, engaging user experience.
- Adds a professional, recruiter-friendly polish to the homepage without affecting existing code.

---

## NPM Packages Used

- react
- react-hook-form
- axios
- firebase
- tailwindcss
- @tanstack/react-query
- react-icons
- lottie-react

---

## R&D Documentation

| Feature / Tech           | Reason for Choosing                                                  | How it Improves the Project                                                            |
| ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **AI Book Assistant**    | Make the website interactive and smart using AI for book suggestions | Enhances user engagement; allows users to get instant recommendations                  |
| **Global Book Explorer** | Integrate millions of global books without touching backend          | Provides unlimited book discovery; uses React Query to cache API results for better UX |
| **Mood Explorer**        | Personalized book recommendations based on mood                      | Makes the website unique and fun; encourages users to explore more books               |
| **Lottie Animations**    | Modern, lightweight animations for professional UI                   | Improves visual appeal; keeps users engaged; recruiter-friendly polished design        |

---

## Important Notes

- A user can have only one role at a time — user, admin, or librarian.
- If a librarian is assigned the admin role, their new role becomes admin, and the previous librarian role will be automatically removed.
- Similarly, if an admin is assigned the librarian role, their new role becomes librarian, and the previous admin role will be removed.

** Sanaya Sabrin is a permanent admin.  
** Sanaya Sabrin's role cannot be changed.  
** Sanaya Sabrin cannot be assigned the librarian role under any circumstance.  
** Sanaya Sabrin's admin role cannot be removed
