"use client"

import { Car } from "@/types/Car"
import Image from "next/image"
import { useEffect, useState } from "react"

const CarCard = (car: Car) => {
  const [imageUrl, setImageUrl] = useState('')
  const CAR_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACHCAMAAADup39UAAAALVBMVEW9xc2XnqS2vcWfpaypsLekq7Kutr24wMeiqK+rsrqzu8OttbyboaijqrG3v8ciJUiNAAAEUElEQVR4nO2a2XqrIBSFjcyIvP/jHmZxSJOIjZx+679pq1VZmz2w0WEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBgnJgk5hAyU6XF3QP8RewkzeMlUo13D/Q3sIq81p4w9K+5AZdZGlN6tOIIzRXL//aY9d1Dvg5Ls2tPNhwY+QE6ur3lLAaJ/CMWyFMvefjT0udxYCTV1SXyDyQCFSeTqBjR/GUSMMFOlsUosPeOvhFLo3qWXPm1+kf5/2QB9v9aICkoydy+XwAehOfrDb1XxVn0XIRE6I+CDy0whjxg+E/P6Qg7alfDKGUzIdscrt9Y+Wwt4C7WJP/WPXInoKrh7GP1fuLFoAUPhvsP0sBGv6mGfGLyPXwgD6OGkERN960B8bVrZpQqrrWt5+vDyC8WHJT/QQc7pyOuQ+LdmsHpP3ZSQc9N/zzEgjHmNJCRdOowIZhn+h3CrXiVy4wfwZP+kP6neVM9CZv6Wh7+pP8kls7e/zPOioqRyplMT72yG88vhKY0O6Na7ayw2IB1Egs+MAPfSVDOCNkTjOohJ5YZOY4CHbvcZyHy4vQxIvfKjw42TIr+49OpCE5Prn5x+jk6dRl3L5JFls+Oz3MWeBasL07/SGwr5zOXXsdYqvYNhEUyuTUGVFyabCbQTrMJdeqy0miV30Q285TvaEeH9qtvedUzzuAGtRMpqrbnmu08XXUZLM63Wo58nj0ug/v1+oZpvWK7YCNj00lEvcuC6MYUQPf6dj1va4CK3QZSyLV88bG2+7fg9Kv1kYOWn7Q942D/jK2ON96/hZ1+vh9sYwhUzr+4vA8BLf26aTyIwO+x1Z+XAybk6ZK2GtoVnZ3c7wCIspVcYkp0pZ9uJpyb1giNJjTb/dTFpR7Plp7fYKt/8c5Emr7T6wAbr6+qaCov9SPP3rydjX69ZKeMqqaLEjkzRtXkX/vZt2wSL1/ZmC0WmZQeWqzbzEY/rWJTpFGZJQD2tcEQIlnYPORaj2JfKeOrgPi7TTcuFvXGIXfrl9XT56UcsVz46aJgYq+h3j0WW5jiPX4ZED2r9D25NNy3FeJHYGixgCyjnUog8HW4fki4OCQ/VjILzR41EjOP5E79aY86N7CLflY8QbfrD3cnxaJFf37mnZsAacFjqF+MLPrV78x/SDa1fuH3yG9sgHKBikYwS/w7xyAhLmKQkpMs1cO/R46djkyZk5i0IFTPBvcFav2J9LVLiolzb0FWpPyfP5XZne/gXbmmy0duB/W/kZWDr6uopN28EBF+T8aPrspHo7MKGZtw7m4qiT6fsHDCHqwXbkd4NygBGZJ/4/yELcZS4rw/mQ51F8Jw4/cf8WOQ5uwcKkj8qiD2f704/DGp5bkwOav1HTt58/WU+osnc83+Z1VESP/fhJQv3shllTl/RkzufuHzJkK7ju7SmbL+jj0nPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHyNf1bSINJhQnwRAAAAAElFTkSuQmCC'

  useEffect(() => {
    if (car.image) {
      setImageUrl(car.image)
    }
  }, [car])
  
  return (
    <div className="border border-black">
      <div>
        <Image
          src={imageUrl}
          onError={() => setImageUrl(CAR_PLACEHOLDER)}
          alt={car.name}
          height={300}
          width={300}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2>{car.name}</h2>
        <div className="my-4">
          <p className="font-bold">{car.dayRate}</p>
          <p>⭐ {car.rating}</p>
        </div>
        <p>Tipe {car.type}, Bahan bakar {car.fuel}.</p>
      </div>
    </div>
  )
}

export default CarCard