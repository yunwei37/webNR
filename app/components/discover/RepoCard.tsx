import { useTranslation } from '../../contexts/LanguageContext';
import { RefreshIcon, TrashIcon } from '../icons';
import { LocalRepo } from '../../types/repo';

interface RepoCardProps {
  repo: LocalRepo;
  onSync: (url: string) => void;
  onRemove: (url: string) => void;
}

export function RepoCard({ repo, onSync, onRemove }: RepoCardProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            {repo.meta.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {`${t('discover.repoCount')} ${repo.meta.novels}`}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {`${t('discover.lastSync')} ${new Date(repo.lastSync).toLocaleString()}`}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('discover.repoUrl')} <span className="break-all">{repo.url}</span>
          </p>
        </div>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onSync(repo.url)}
            className="p-2 text-blue-500 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <RefreshIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onRemove(repo.url)}
            className="p-2 text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 