'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function YandexMetrikaComponent() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		if (typeof ym !== 'undefined') {
			const url = `${pathname}?${searchParams}`
			ym(100267604, 'hit', url)
		}
	}, [pathname, searchParams])

	return null
}

export default function YandexMetrika() {
	return (
		<Suspense fallback={null}>
			<YandexMetrikaComponent />
		</Suspense>
	)
}