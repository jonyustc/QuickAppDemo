using System.Collections.Generic;

namespace DAL.Repositories.Interfaces
{
    public interface IRepository<TEntity> where TEntity:class
    {
         void Add(TEntity entity);
         TEntity Get(int id);
         IEnumerable<TEntity> GetAll();
    }
}