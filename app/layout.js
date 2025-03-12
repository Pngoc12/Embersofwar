import styles from './styles.module.css';
export default function DashboardLayout({ children }) {
    return (
      <html lang="en">
        <head>
            <title>ember of war</title>
        </head>
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main >{children}</main>
        </body>
      </html>
    )
  }