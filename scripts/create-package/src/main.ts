import { getPackageOptions } from '@/cli'
import { createPackage } from '@/core'

const main = async () => {
	const packageOptions = await getPackageOptions()
	createPackage(packageOptions)
}

main()
