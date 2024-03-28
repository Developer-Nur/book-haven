import { FaArrowDown } from "react-icons/fa6";

const About = () => {
    return (
        <div className="mt-12">

            <div className="grid lg:grid-cols-2 justify-between items-center gap-7">
                <div>
                    <p>
                        Welcome to BookHaven – your premier online destination for all things literary! At BookHaven, we believe that books have the power to inspire, educate, and transport us to new worlds.

                        With a vast collection spanning genres from gripping thrillers to heartwarming romances, thought-provoking non-fiction to captivating children's literature, we cater to every reader's taste and preference. Our meticulously curated selection ensures that whether you're a seasoned bibliophile or just starting your reading journey, you'll find something to ignite your imagination.<br /> <br />

                        But BookHaven is more than just a bookstore – it's a community of book lovers united by their passion for storytelling. Our blog features insightful book reviews, author interviews, and literary discussions, fostering a space where readers can connect and engage with each other.

                        We take pride in providing exceptional customer service, offering seamless browsing and purchasing experiences, and ensuring prompt delivery of your favorite titles right to your doorstep. Whether you're searching for a beloved classic or the latest bestseller, BookHaven is your one-stop shop for all your literary needs.<br /> <br />

                        Join us in celebrating the magic of books and embark on an unforgettable reading journey with BookHaven – where every page turns into an adventure!
                    </p>
                </div>
                <div className="border-l-2 pl-5">
                    <h3 className="text-center border-b-2 prim-title text-5xl p-4">FAQ</h3>
                    <div tabIndex={0} className="collapse bg-base-200 mt-5">
                        <div className="collapse-title text-xl font-medium flex justify-between items-center">
                            <span>What payment methods do you accept?</span>
                            <span><FaArrowDown /></span>
                        </div>
                        <div className="collapse-content">
                            <p> We accept Visa, Mastercard, American Express, and PayPal.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse bg-base-200 mt-5">
                        <div className="collapse-title text-xl font-medium flex justify-between items-center">
                            <span> How long will it take for my order to arrive?</span>
                            <span><FaArrowDown /></span>

                        </div>
                        <div className="collapse-content">
                            <p> Typically 3-7 days in the US, longer for international orders</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse bg-base-200 mt-5">
                        <div className="collapse-title text-xl font-medium flex justify-between items-center">
                            <span>Return Policy?</span>
                            <span><FaArrowDown /></span>
                        </div>
                        <div className="collapse-content">
                            <p>
                                At BookHaven, customer satisfaction is our top priority. If for any reason you are not completely satisfied with your purchase, you may return it within 30 days of receipt for a full refund or exchange. The item must be in its original condition, unused, and with all accompanying materials.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;