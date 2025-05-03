"use client";
import React, { useState } from "react";
import { cn } from "@/app/lib/utils";
import { useToast } from "@/app/components/ui/use-toast";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Mail } from "lucide-react";

type RsvpFormProps = {
  className?: string;
};

const RsvpForm = ({ className }: RsvpFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    key: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${backendUrl}/confirmation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            key: formData.key,
          }),
        }
      );

      const data = await response.json();
      toast({
        title: "Presença confirmada com sucesso!",
        description: data.message || "Sua presença foi registrada.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        key: "",
      });
    } catch (error: any) {

      if (error instanceof Error) {
        toast({
          title: "Erro",
          description: "Erro ao processar a resposta do servidor.",
          duration: 5000,
        });
        return;
      }

      toast({
        title: "Erro",
        description:
          error.message || "Erro ao confirmar presença. Tente novamente.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <div className="wedding-card p-8 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
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

          <div className="space-y-2">
            <Label htmlFor="phone">Chave</Label>
            <Input
              id="key"
              name="key"
              type="tel"
              value={formData.key}
              onChange={handleChange}
              placeholder="c2d2d781-9071-462c-844a-1ac382d4adea"
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
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
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
        </form>
      </div>
    </div>
  );
};

export default RsvpForm;
