"use client";

import { CalendarIcon, Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Header from "@/components/elements/header";
import Footer from "@/components/elements/footer";

const contacts = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
    <Header/>
      <div className="w-full py-20 text-black bg-violet-100">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact Us</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-4xl max-w-xl text-left font-bold">
                  Join FitLife Today
                </h4>
                <p className="text-md leading-relaxed max-w-sm text-left">
                Your journey to a healthier, stronger you starts here! Have questions or need assistance? Our team is here to help. Reach out to us via phone, email, or visit our location for personalized support.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>State-of-the-Art Equipment</p>
                <p className="text-muted-foreground text-sm wrap-">
                Train with cutting-edge machines for optimal results.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Personalized Training Plans</p>
                <p className="text-muted-foreground text-sm">
                Get custom plans tailored to your goals.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Supportive Community Environment</p>
                <p className="text-muted-foreground text-sm">
                Be part of a motivating and welcoming community.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center items-center place-content-center w-full mt-8">
            <div className="rounded-md max-w-lg flex flex-col bg-violet-800 p-7 gap-4 text-white">
              <p className="text-lg font-bold">Book an Inquiry</p>
              <div className="grid w-full max-w-lg items-center gap-1">
                <Label htmlFor="Full Name">Full Name</Label>
                <Input id="fullname" type="text" />
              </div>
              <div className="grid w-full max-w-lg items-center gap-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div className="grid w-full max-w-lg items-center gap-1">
                <Label htmlFor="message">Message</Label>
                <Input id="message" type="textarea" />
              </div>
              <Button className="bg-violet-500 gap-4 w-full hover:text-violet-300 font-semibold duration-200">
                Book the Inquiry <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div><Footer/></>
  );
};
export default contacts;