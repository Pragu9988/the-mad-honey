"use client"; // Error components must be Client Components

import { Button } from "@/components/elements/Buttons/Button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import EmptyJarImg from "@/assets/images/empty-jar-ai.jpg";
import Image from "next/image";
import TwoColumn from "@/components/sections/TwoColumn";
import { cn } from "@/utils/cn.utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error-area py-6 md:py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="col-module__image tw-pt-4 lg:tw-pt-0 image-wrapper  image-hover-zoom tw-rounded-lg tw-overflow-hidden">
              <Image
                src={EmptyJarImg}
                // srcSet={srcSet}
                width={800}
                height={800}
                alt={"Empty Jar"}
              />
            </div>
          </div>
          <div
            className={cn(
              "col-span-1 md:col-span-2 align-middle lg:col-span-3"
            )}
          >
            <div className="col-module__content tw-ml-0 lg:tw-ml-10 space-y-6">
              <h2 className="h1 tw-mb-4">Looks like you are lost.</h2>
              <p>
                It looks like nothing was found at this location. You can either
                go back to the last page or go to homepage.
              </p>
              <div className="mt-8">
                <Button
                  variant={"accent"}
                  className="m-2.5"
                  onClick={() => router.back()}
                >
                  <i className="far fa-history mr-3" /> Go back
                </Button>
                <Button className="m-2.5">
                  <i className="far fa-home mr-3" /> Homepage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
