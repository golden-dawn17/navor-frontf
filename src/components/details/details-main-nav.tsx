import { ArrowLeftCircle } from "lucide-react"
import Link from "next/link"

export function DetailsMainNav(){
    return(
            <Link href="/applications" className="flex h-16 items-center gap-4" style={{fontSize:"1.6rem", fontWeight:"500"}}>
                <ArrowLeftCircle/>
                Applications
            </Link>
    )
}