# 📂 ByteMe - Storage Management Solution

ByteMe is a powerful and efficient storage management solution, similar to Google Drive and Dropbox. It enables users to securely upload, manage, and share files effortlessly. Designed with a modern tech stack, ByteMe provides a seamless experience with features such as file uploading, viewing details, sharing, downloading, deleting files, and a global search function.

---

## 🚀 Features

- 📤 **File Uploading** – Upload files with ease and manage them securely.
- 📑 **View File Details** – Check metadata such as file size, type, and upload date.
- 🔗 **File Sharing** – Generate shareable links for easy access.
- 📥 **Download Files** – Retrieve stored files anytime.
- 🗑️ **Delete Files** – Remove unwanted files from storage.
- 🔍 **Global Search & Sorting** – Quickly find files with advanced search and sorting options.
- 🏠 **Well-Designed Dashboard** – Get all file details and actions in one place for a seamless user experience.

---

## 🛠️ Tech Stack

ByteMe is built using modern web technologies to ensure high performance and scalability:

| **Technology**  | **Purpose** |
|----------------|------------|
| [Next.js](https://nextjs.org/) | Fast and optimized React framework |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework for styling |
| [ShadCN](https://ui.shadcn.com/) | Pre-styled UI components for a sleek design |
| [Appwrite](https://appwrite.io/) | Secure backend for authentication, storage, and database management |

---

## 🚀 How to Run  

1.  **Clone the repository**
   
   ```bash  
   git clone https://github.com/Souvik606/ByteMe.git  
   cd byteme
  ```

2.  **Install dependencies**

   ```bash
   npm install
     or
   yarn install
  ```

3. **Add the environment variables**
  Make a .env file and add clerk, uploadthings, database url and livekit credentials

  ```bash
  NEXT_PUBLIC_APPWRITE_ENDPOINT
  NEXT_PUBLIC_APPWRITE_PROJECT
  NEXT_PUBLIC_APPWRITE_DATABASE
  NEXT_PUBLIC_APPWRITE_USERS_COLLECTION
  NEXT_PUBLIC_APPWRITE_FILES_COLLECTION
  NEXT_PUBLIC_APPWRITE_BUCKET
  NEXT_APPWRITE_KEY

```
4. **Start the development server**

  ```bash
  npm run dev  
    or
  yarn dev
```
5. **Open the app**
     Visit http://localhost:3000 in your browser.
