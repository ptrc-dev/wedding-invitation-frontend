
import { cn } from '@/app/lib/utils';
import React from 'react';

type PageSectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
    noPadding?: boolean;
};

const PageSection = ({ children, className, id, noPadding = false }: PageSectionProps) => {
    return (
        <section 
            id={id} 
            className={cn(
                'w-full',
                !noPadding && 'py-16 lg:py-24 px-4 md:px-8',
                className
            )}
        >
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    );
};

export default PageSection;
