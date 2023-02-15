import { Link } from "react-router-dom";

const NavLink = () => {
    const logout = () => {
        alert(document.getElementsByName('_token').value);
    }
    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <div className="w-12">
                                <Link to={`/`}><img src={`../../images/logo.png`} /></Link>
                            </div>
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Link to={`/`}>ホーム</Link>
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <Link to={`/cart`}>カートを表示</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div onClick={() => location.href='/logout'} className="hidden sm:flex sm:items-center sm:ml-6"> */}
                    <div onClick={() => logout()} className="hidden sm:flex sm:items-center sm:ml-6">
                        <Link>ログアウト</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavLink;
