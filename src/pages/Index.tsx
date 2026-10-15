const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md w-full text-center space-y-3">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted text-muted-foreground mb-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Aguardando comando</h1>
        <p className="text-sm text-muted-foreground">
          Nenhum site ou aplicativo foi criado. O sistema está pronto e aguardando suas instruções.
        </p>
      </div>
    </main>
  )
}

export default Index
