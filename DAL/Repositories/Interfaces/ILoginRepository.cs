using DAL.Models;

namespace DAL.Repositories.Interfaces
{
    public interface ILoginRepository:IRepository<User>
    {
        bool IsValidUser(string userName,string password);
        User GetUserNameFromUser(string userName);
    }
}