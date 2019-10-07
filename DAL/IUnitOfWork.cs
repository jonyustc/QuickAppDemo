using DAL.Repositories.Interfaces;

namespace DAL
{
    public interface IUnitOfWork
    {
         IToDoRepository ToDos{get;}
         int SaveChanges();
    }
}