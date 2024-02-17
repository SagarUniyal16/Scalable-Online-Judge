import Header from "./Header";
import Footer from "./Footer";
function Error() {
  return (
    <div>
      <Header />
      <div>
        <h1>
          OOPS..We got an error . Look like you have not entered correct path
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Error;