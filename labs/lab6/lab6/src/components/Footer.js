export default function Footer() {
    return (
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0 text-center">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <p className="mb-0 text-center">Built with React and Bootstrap</p>
        </div>
      </footer>
    );
  }