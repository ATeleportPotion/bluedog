package atp.service;

import atp.pojo.User;
import atp.utils.R;
import org.springframework.stereotype.Component;

/**
 * @author Xinyang Zhao
 * @version 1.0
 */
@Component
public interface UserService {
    R login(User user);
    R register(User user);
}
