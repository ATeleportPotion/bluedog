package atp.mapper;

import atp.pojo.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author Xinyang Zhao
 * @version 1.0
 */
@Mapper
public interface UserMapper {
     User isUser(User user);
     void register(User user);
}
