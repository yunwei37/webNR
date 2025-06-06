'use client';

import React, { useState } from 'react';
import { BookmarksPage } from './BookmarksPage';
import { ChaptersPage } from './ChaptersPage';
import { MainMenuPage } from './MainMenuPage';
import { ProgressSlider } from './ProgressSlider';
import { SearchPage } from './SearchPage';
import { SettingsPage } from './SettingsPage';
import { Novel } from '../../types';

interface ReaderConfig {
    fontSize: number;
    isPaged: boolean;
    charsPerPage: number;
}

export type MenuPage = 'main' | 'settings' | 'bookmarks' | 'chapters' | 'search';

interface ReaderMenuProps {
    isOpen: boolean;
    onClose: () => void;
    // Reading settings
    config: ReaderConfig;
    onConfigChange: (updates: Partial<ReaderConfig>) => void;
    // Novel data
    novel?: Novel;
    content: string;
    currentPosition: number;
    onPositionChange: (offset: number) => void;
}

export const ReaderMenu: React.FC<ReaderMenuProps> = ({
    isOpen,
    onClose,
    config,
    onConfigChange,
    novel,
    content,
    currentPosition,
    onPositionChange,
}) => {
    const [currentPage, setCurrentPage] = useState<MenuPage>('main');

    if (!isOpen) return null;

    const handleProgressChange = (progress: number) => {
        const newPosition = Math.floor(progress * content.length);
        onPositionChange(newPosition);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div className="
        fixed right-0 top-0 h-full w-[min(100vw-3rem,24rem)]
        bg-white dark:bg-gray-900 shadow-xl z-50
        flex flex-col
      ">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 overscroll-contain">
                    {currentPage === 'main' && (
                        <MainMenuPage onNavigate={setCurrentPage} />
                    )}
                    {currentPage === 'settings' && (
                        <SettingsPage
                            fontSize={config.fontSize}
                            onFontSizeChange={(size) => onConfigChange({ fontSize: size })}
                            isPaged={config.isPaged}
                            onModeToggle={() => onConfigChange({ isPaged: !config.isPaged })}
                            onBack={() => setCurrentPage('main')}
                            charsPerPage={config.charsPerPage}
                            onCharsPerPageChange={(chars) => onConfigChange({ charsPerPage: chars })}
                        />
                    )}
                    {currentPage === 'bookmarks' && (
                        <BookmarksPage
                            currentPosition={currentPosition}
                            onPositionChange={onPositionChange}
                            onBack={() => setCurrentPage('main')}
                        />
                    )}
                    {currentPage === 'chapters' && (
                        <ChaptersPage
                            content={content}
                            currentPosition={currentPosition}
                            onPositionChange={onPositionChange}
                            onBack={() => setCurrentPage('main')}
                            chapters={novel?.chapters}
                        />
                    )}
                    {currentPage === 'search' && (
                        <SearchPage
                            content={content}
                            onPositionChange={onPositionChange}
                            onBack={() => setCurrentPage('main')}
                        />
                    )}
                </div>

                {/* Position Slider */}
                <ProgressSlider
                    progress={content ? currentPosition / content.length : 0}
                    onProgressChange={handleProgressChange}
                />
            </div>
        </>
    );
}; 