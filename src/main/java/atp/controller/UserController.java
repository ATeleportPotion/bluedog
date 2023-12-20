package atp.controller;

import atp.pojo.User;
import atp.service.UserService;
import atp.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author Xinyang Zhao
 * @version 1.0
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService = null;

    @RequestMapping(value = "/login")
    @ResponseBody
    public boolean login(@RequestParam("account") String account, @RequestParam("password") String password) {

        User user = new User();
        user.setUsername(account);
        user.setPassword(password);
        R r = userService.login(user);
        return r.isUserExist();
    }

    @RequestMapping("/register")
    @ResponseBody
    public boolean register(@RequestParam("account") String account, @RequestParam("password") String password) {
        User user = new User();
        user.setUsername(account);
        user.setPassword(password);

        if(userService.login(user).isUserExist()){
            return false;
        }
        else{
            userService.register(user);
            return true;
        }
    }



}
