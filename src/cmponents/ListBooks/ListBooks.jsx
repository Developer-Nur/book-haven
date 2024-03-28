import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiOutlineDown } from "react-icons/ai";
import 'react-tabs/style/react-tabs.css';
import ReadingList from '../ReadingList/ReadingList';
import WishList from '../WishList/WishList';

const ListBooks = () => {
    return (
        <div className="text-center">
            <section className="h-[100px] border-color rounded pt-[20px] mb-10">
                <h3 className="text-[40px] font-bold prim-title text-center">Books</h3>
            </section>



            {/* Dropdown */}
            <div className="dropdown z-10">
                <div tabIndex={0} role="button" className="btn m-1 theme-bg text-white text-xl font-semibold">
                    Sort By <AiOutlineDown />
                </div>
                <ul tabIndex={0} className="dropdown-content theme-bg text-white text-xl font-semibold menu p-2 shadow  rounded-box w-[300px]">
                    <li className='border-b-2'><a>Rating</a></li>
                    <li className='border-b-2'><a>Number of pages</a></li>
                    <li className='border-b-2'><a>Published year</a></li>
                </ul>
            </div>


            <div className='mt-12 text-left'>
                <Tabs >
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    {/* Reading list */}
                    <TabPanel>
                        <ReadingList></ReadingList>
                    </TabPanel>

                    {/* Wishlist */}
                    <TabPanel>
                        <WishList></WishList>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListBooks;