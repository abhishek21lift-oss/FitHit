export default function Login() {
  return <main style={{maxWidth:480,margin:"0 auto",padding:"64px 24px",fontFamily:"system-ui"}}>
    <h1>Sign in</h1><p>Authentication is wired to the dedicated FitHit Supabase project in the next identity phase.</p>
    <form><label>Email<input name="email" type="email" autoComplete="email" required /></label><br/>
    <label>Password<input name="password" type="password" autoComplete="current-password" required /></label><br/>
    <button type="submit">Continue</button></form>
  </main>;
}