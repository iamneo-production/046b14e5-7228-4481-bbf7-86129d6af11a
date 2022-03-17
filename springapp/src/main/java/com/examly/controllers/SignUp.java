@Controller
public class SignUp
{
    @Autowired
    private UserRepo ur;
    private boolean saveUser(UserModel user)
    {
        if(ur.findById(user.email)!=null)
            return false;
        ur.save(user);
        return true;

    }
}