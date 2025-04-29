
"use client"
import React, { useState } from 'react';
import { cn } from "@/app/lib/utils"
import { useToast } from './ui/use-toast';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Mail } from "lucide-react";

type RsvpFormProps = {
    className?: string;
};

const RsvpForm = ({ className }: RsvpFormProps) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Presença confirmada com sucesso!",
                description: "Enviaremos uma senha para acesso em seu email.",
                duration: 5000,
            });
            
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
            });
        }, 1500);
    };

    return (
        <div className={cn('w-full max-w-md mx-auto', className)}>
            <div className="wedding-card p-8 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Nome Completo</Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Digite seu nome completo"
                            required
                            className="border-wedding-lavender/50 focus:border-wedding-gold"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu-email@exemplo.com"
                            required
                            className="border-wedding-lavender/50 focus:border-wedding-gold"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(00) 00000-0000"
                            required
                            className="border-wedding-lavender/50 focus:border-wedding-gold"
                        />
                    </div>
                    
                    <Button 
                        type="submit" 
                        className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-white font-medium"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Confirmando...
                            </span>
                        ) : (
                            <span className="flex items-center">
                                <Mail className="mr-2 h-5 w-5" />
                                Confirmar Presença
                            </span>
                        )}
                    </Button>
                    
                    <p className="text-sm text-gray-500 text-center">
                        Sua senha de acesso será enviada para o e-mail informado.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RsvpForm;
