import Header from '../components/Header/index.tsx';
import Footer from '../components/Footer/index.tsx';
import Image from 'next/image';
import erro4040 from '../assets/erro404.svg';
import Link from 'next/link';

const Erro: React.FC = () => {
    return (
        <>
            <Header paramsCateg={undefined} />
            <main className='main404'>
                <h1>Ooops!</h1>
                <Image src={erro4040} alt="arrow" width={361} height={361} />
                <p>Sorry! We weren’t able to find an article related to your search.</p>
                <Link href='/'>BACK TO ALL ARTICLES</Link>
            </main>
            <Footer />
        </>
    );
};

export default Erro;
