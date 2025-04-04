import Profile from './profil.jsx';
import Button from './button.jsx';

export default function Gallery() {
    const pragrafStyle = {
        color: 'blue',
        fontSize: '54px',
        fontWeight: 'bold',
    };

    const tambah = (a, b) => a + b;
    const headTitle = 'Home ini menggunakan variabel js';
    const headingstyle = 'text-red-700 text-2xl text-center font-semibold';
    const hasil = tambah(6, 5);

    return (
        <div className="py-8 px-8">
            <h1 className={headingstyle}>{headTitle}</h1>
            <h1 className={headingstyle}>
                yang ini digunakan secara langung di dalam tag html{' '}
            </h1>
            <Profile />
            <br />
            <a href="#">
                <Button />
            </a>
            <p style={pragrafStyle}>{hasil}</p>
            <p className="font-bold text-green-600 text-2xl">
                ini di style menggunakan tailwind
            </p>
        </div>
    );
}
