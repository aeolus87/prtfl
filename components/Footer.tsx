export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 mt-8">
      <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
        © {currentYear} Julius Callejo. All rights reserved.
      </p>
    </footer>
  )
}
