import CodeCard from "../components/code-card";
import NavBar from "../components/navbar";

const Home = () => {
    return (
        <>
            <NavBar />
            <main className="mt-20 mb-16 md:mb-0">
                <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                    <CodeCard />
                </div>
            </main>
        </>
    );
};

export default Home;
