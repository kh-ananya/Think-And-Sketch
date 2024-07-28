import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import React from 'react';

function Header() {
    const { user }: any = useKindeBrowserClient();

    return (
        <header className="flex justify-between items-center w-full p-4 bg-white shadow-md">
            <div className="text-xl font-bold">All Files </div>
            <div className="flex items-center gap-2">
                {user && (
                    <>
                        <span className="text-sm font-medium">{user.name}</span>
                        <Image
                            src={user.picture || '/default-avatar.png'}
                            alt="User Avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
