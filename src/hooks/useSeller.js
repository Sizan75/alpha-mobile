import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setisSeller] = useState(false);
    const [isSellerLoading, setisSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/sellers/${email}`)
                .then(res => res.json())
                .then(data => {
                    setisSeller(data.isSeller);
                    setisSellerLoading(false);
                    
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;