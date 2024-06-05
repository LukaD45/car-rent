export default function Map() {
  return (
    <section className="max-w-[1480px] mx-auto h-[30rem] md:h-[30rem] mb-24">
      <div className="my-10 w-full text-center text-4xl font-semibold">
        <h1>Pronađite nas ovdje!</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6614.987871912637!2d15.986779224917592!3d45.806055195548794!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shr!2shr!4v1716027440517!5m2!1shr!2shr"
        className="w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </section>
  );
}
