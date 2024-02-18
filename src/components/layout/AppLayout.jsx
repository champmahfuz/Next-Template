import Header from "../header/Header";
import Footer from "../footer/footer";

export default function AppLayout({ children, authPage = false }) {
  return (
    <>
      {!authPage && (
        <div className="sticky top-0 z-50">
          <Header />
        </div>
      )}
      {children}
      {!authPage && <Footer />}
    </>
  );
}
