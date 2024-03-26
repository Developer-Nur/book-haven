

const ErrorPage = () => {
    return (
        <div className="fixed top-[30%] left-[40%] text-center space-y-3 text-2xl prim-title">
            <p>404</p>
            <p>Opps!!</p>
            <p>Page note found!!!</p>
            <button to="/">Go Home</button>
        </div>
    );
};

export default ErrorPage;