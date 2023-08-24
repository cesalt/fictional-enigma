import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <span className='flex align-center justify-between max-w-2xl mr-auto ml-auto mt-4'>
            <Head title="Welcome" />

            {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="flex mr-auto ml-auto"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={route('login')}
                    >
                        Log in
                    </Link>

                    <Link
                        href={route('register')}
                    >
                        Register
                    </Link>
                </>
            )}

        </span>
    );
}
