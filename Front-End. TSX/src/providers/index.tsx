"use client"

import { AuthProvider } from "@/contexts/authContext";
import { PlayerProvider } from "@/contexts/playerContext";
import { ReactNode } from "react";


export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <AuthProvider>
                <PlayerProvider>
                    {children}
                </PlayerProvider>
            </AuthProvider>
        </>
    )
}