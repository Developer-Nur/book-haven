import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadingList from '../ReadingList/ReadingList';
import WishList from '../WishList/WishList';

const ListBooks = () => {
    return (
        <div className="text-center">
            <section className="h-[100px] border-color rounded pt-[20px] mb-10">
                <h3 className="text-[40px] font-bold prim-title text-center">Books</h3>
            </section>
            <a className="btn theme-bg text-white text-xl font-semibold ">Sort BY</a>
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