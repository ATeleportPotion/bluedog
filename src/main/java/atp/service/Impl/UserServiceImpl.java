package atp.service.Impl;

import atp.mapper.UserMapper;
import atp.pojo.User;
import atp.service.UserService;
import atp.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * @author Xinyang Zhao
 * @version 1.0
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Transactional
    @Override
    public R login(User user) {
        User isUser=userMapper.isUser(user);
        R r = new R();

        if (isUser == null){
            r.setUserExist(false);
            return r;
        }
        else {
            r.setUserExist(true);
            return r;
        }
    }

    @Transactional
    @Override
    public R register(User user) {
        userMapper.register(user);
        return null;
    }
}
