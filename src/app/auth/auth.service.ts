import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

    login(email: string, password: string): Observable<any> {
      return new Observable(observer => {
        this.afAuth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Success: Return user data and token
            userCredential.user?.getIdToken().then(token => {
              observer.next({ user: userCredential.user, token });
              observer.complete();
            });
          })
          .catch((error) => {
            // Handle errors
            observer.error(error);
          });
      });
    }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => !!user));
  }
}
