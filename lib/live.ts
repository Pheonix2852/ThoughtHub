import { client } from "@/sanity/lib/client";
import { defineLive } from "next-sanity";
import "server-only";

export const {sanityFetch , sanityLive } = defineLive({client})