import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserModel {
    
     @Id
    private String email;
    private String password;
    private String username;
    private String mobileNumber;
    private boolean active;
    private String role="";
    UserModel(String email,String password,String username,String mobileNumber)
    {
        this.email=email;
        this.password=password;
        this.username=username;
        this.mobileNumber=mobileNumber;
    }
    public String getEmail(){
        return this.email;
    }
    public String getPassword(){
        return this.password;
    }
}