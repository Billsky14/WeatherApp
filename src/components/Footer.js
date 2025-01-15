export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 mt-8">
        <div className="container mx-auto text-center text-white">
          <p> All rights reserved. &copy; {new Date().getFullYear()} UBJ Cuaca.</p>
        </div>
      </footer>
    );
  }