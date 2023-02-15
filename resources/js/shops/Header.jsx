import { HEADER_TITLE } from "../utility/Constants";

const Header = (Page) => {

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {HEADER_TITLE[Page['page']]}
                </h2>
            </div>
        </header>
    )
};

export default Header;
