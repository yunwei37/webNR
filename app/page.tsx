'use client';

import { useCallback, useEffect, useState } from 'react';
import { Header } from './components/Header';
import type { HeaderButton } from './components/Header';
import { LibraryView } from './components/library/LibraryView';
import { Reader } from './components/Reader';
import { SettingsView } from './components/SettingsView';
import { NovelStorage } from './lib/storage';
import { Novel } from './types';
import { useTranslation } from './contexts/LanguageContext';
import { LoadingDialog } from './components/LoadingDialog';
import { Footer } from './components/Footer';
import { DiscoverView } from './components/discover';
import { SearchView } from './components/search';
import { LocalRepo } from './types/repo';
import { handleUrlImport, handleRepoImport } from './lib/url-handlers';

type View = 'library' | 'reader' | 'settings' | 'discover' | 'search';

export default function Home() {
  const { t } = useTranslation();
  const [currentView, setCurrentView] = useState<View>('library');
  const [currentNovel, setCurrentNovel] = useState<Novel | null>(null);
  const [content, setContent] = useState<string>('');
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [repositories, setRepositories] = useState<LocalRepo[]>([]);
  const [showReaderMenu, setShowReaderMenu] = useState(false);

  const handleNovelSelect = useCallback(async (novel: Novel) => {
    const content = await NovelStorage.getNovelContent(novel.id);
    setCurrentNovel(novel);
    setContent(content);
    setCurrentOffset(novel.lastPosition);
    setCurrentView('reader');
  }, []);

  // Handle URL query parameters for auto-import and repo adding
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const addUrl = params.get('add');
    const addRepos = params.get('repos');

    if (addRepos) {
      const repoUrls = addRepos.split(',').filter(url => url.trim());
      if (repoUrls.length > 0) {
        handleRepoImport(repoUrls, {
          repositories,
          onLoading: setIsLoading,
          onLoadingMessage: setLoadingMessage,
          onRepositoriesChange: setRepositories,
          onViewChange: setCurrentView,
          t
        });
        window.history.replaceState({}, '', window.location.pathname);
      }
    } else if (addUrl) {
      handleUrlImport(addUrl, {
        onLoading: setIsLoading,
        onLoadingMessage: setLoadingMessage,
        onNovelSelect: handleNovelSelect,
        t
      });
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [handleNovelSelect, repositories, t]);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedDarkMode ? savedDarkMode === 'true' : systemPrefersDark;
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle dark mode toggle
  const handleDarkModeToggle = useCallback(() => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', newValue.toString());
      return newValue;
    });
  }, []);

  const handlePositionChange = useCallback((offset: number) => {
    setCurrentOffset(offset);
    if (currentNovel) {
      NovelStorage.updateNovelProgress(currentNovel.id, offset);
    }
  }, [currentNovel]);

  const handleBackToLibrary = useCallback(() => {
    setCurrentNovel(null);
    setContent('');
    setCurrentOffset(0);
    setCurrentView('library');
  }, []);

  // Get the current view title
  const getViewTitle = () => {
    switch (currentView) {
      case 'reader':
        return currentNovel?.title || t('reader.title');
      case 'settings':
        return t('common.settings');
      case 'discover':
        return t('common.discover');
      case 'search':
        return t('common.search');
      default:
        return t('library.title');
    }
  };

  // Get back action for current view
  const getBackAction = () => {
    if (currentView === 'library') return undefined;
    return handleBackToLibrary;
  };

  const handleNavigate = useCallback((view: View) => {
    if (currentView === 'reader' && view !== 'reader') {
      handleBackToLibrary();
    }
    setCurrentView(view);
  }, [currentView, handleBackToLibrary]);

  // Load repositories on mount
  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const repos = await NovelStorage.getAllRepositories();
        setRepositories(repos);
      } catch (error) {
        console.error('Failed to load repositories:', error);
      }
    };
    loadRepositories();
  }, []);

  // Define header buttons based on current view
  const getHeaderButtons = (): HeaderButton[] => {
    if (currentView === 'reader') {
      return [{
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ),
        onClick: () => setShowReaderMenu(true),
        ariaLabel: 'Open reader menu'
      }];
    }
    
    if (currentView === 'library') {
      return [{
        icon: <span className="text-xl">⚙️</span>,
        onClick: () => setCurrentView('settings'),
        ariaLabel: t('common.settings')
      }];
    }

    return [];
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="h-full flex flex-col">
        {/* Header */}
        <Header
          title={getViewTitle()}
          buttons={getHeaderButtons()}
          onBackClick={getBackAction()}
        />

        {/* Main content area */}
        <div className="flex-1 min-h-0">
          {currentView === 'library' && (
            <LibraryView
              onNovelSelect={handleNovelSelect}
            />
          )}

          {currentView === 'reader' && currentNovel && (
            <div className="h-full flex relative">
              <div className="flex-1 min-w-0 h-full">
                <Reader
                  content={content}
                  currentOffset={currentOffset}
                  onPositionChange={handlePositionChange}
                  defaultConfig={{
                    fontSize: 16,
                    isPaged: false,
                  }}
                  showMenu={showReaderMenu}
                  onMenuClose={() => setShowReaderMenu(false)}
                />
              </div>
            </div>
          )}

          {currentView === 'settings' && (
            <SettingsView
              isDarkMode={isDarkMode}
              onDarkModeToggle={handleDarkModeToggle}
            />
          )}

          {currentView === 'discover' && <DiscoverView />}
          
          {currentView === 'search' && (
            <div className="h-full">
              <SearchView 
                repositories={repositories}
                onSearching={() => {}}
                className="h-full"
              />
            </div>
          )}

          {/* Loading Dialog */}
          {isLoading && (
            <LoadingDialog
              message={loadingMessage}
              onCancel={() => setIsLoading(false)}
            />
          )}
        </div>

        {/* Footer Navigation */}
        {currentView !== 'reader' && (
          <Footer
            currentView={currentView}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
}
