using DAL.Repositories.Interfaces;

namespace DAL
{
    public interface IUnitOfWork
    {
         IToDoRepository ToDos{get;}
         ILoginRepository Logins{get;}
         IRegistrationRepository Users { get; }
         int SaveChanges();
    }
}