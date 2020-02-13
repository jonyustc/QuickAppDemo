using DAL.Models;
using DAL.Repositories.Interfaces;
using System.Linq;

namespace DAL.Repositories
{
    public class LoginRepository : Repository<User>, ILoginRepository
    {
        private ApplicationDbContext _dbContext;

        public LoginRepository(ApplicationDbContext dbContext):base(dbContext)
        {
            _dbContext=dbContext;
        }

        public bool IsValidUser(string userName,string password)
        {
           return _dbContext.Users.Where(x=>x.UserName==userName && x.Password==password).Any();
        }

        public User GetUserNameFromUser(string userName){
            return _dbContext.Users.Where(x=>x.UserName==userName).SingleOrDefault();
        }
    }
}