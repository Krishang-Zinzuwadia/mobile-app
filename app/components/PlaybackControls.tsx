import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';
import { typography } from '../constants/typography';
import { PlaybackState } from '../types';

interface PlaybackControlsProps {
  playbackState: PlaybackState;
  duration: number;
  onPlayPause: () => void;
  onSpeedChange: (speed: number) => void;
  onSeek: (time: number) => void;
}

const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5, 2];

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  playbackState,
  duration,
  onPlayPause,
  onSpeedChange,
  onSeek,
}) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? playbackState.currentTime / duration : 0;

  const handleProgressBarPress = (event: any) => {
    const { locationX } = event.nativeEvent;
    const barWidth = event.currentTarget.width;
    const newProgress = locationX / barWidth;
    const newTime = newProgress * duration;
    onSeek(newTime);
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressSection}>
        <Text style={styles.timeText}>{formatTime(playbackState.currentTime)}</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
          </View>
        </View>
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity style={styles.skipButton} activeOpacity={0.7}>
          <Ionicons name="play-back" size={32} color={colors.white} />
          <Text style={styles.skipText}>15s</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playPauseButton}
          onPress={onPlayPause}
          activeOpacity={0.8}
        >
          <Ionicons
            name={playbackState.isPlaying ? 'pause' : 'play'}
            size={48}
            color={colors.white}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipButton} activeOpacity={0.7}>
          <Ionicons name="play-forward" size={32} color={colors.white} />
          <Text style={styles.skipText}>30s</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.speedSection}>
        <Text style={styles.speedLabel}>Playback Speed</Text>
        <View style={styles.speedOptions}>
          {SPEED_OPTIONS.map((speed) => (
            <TouchableOpacity
              key={speed}
              style={[
                styles.speedButton,
                playbackState.speed === speed && styles.speedButtonActive,
              ]}
              onPress={() => onSpeedChange(speed)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.speedText,
                  playbackState.speed === speed && styles.speedTextActive,
                ]}
              >
                {speed}x
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: spacing.lg,
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  timeText: {
    color: colors.white,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    minWidth: 45,
  },
  progressBarContainer: {
    flex: 1,
    marginHorizontal: spacing.md,
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: colors.secondaryDark,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  skipButton: {
    alignItems: 'center',
    marginHorizontal: spacing.xl,
  },
  skipText: {
    color: colors.white,
    fontSize: typography.sizes.xs,
    marginTop: 4,
  },
  playPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  speedSection: {
    alignItems: 'center',
  },
  speedLabel: {
    color: colors.white,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    marginBottom: spacing.md,
  },
  speedOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  speedButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    backgroundColor: colors.secondaryDark,
    minWidth: 60,
    alignItems: 'center',
  },
  speedButtonActive: {
    backgroundColor: colors.primary,
  },
  speedText: {
    color: colors.gray,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
  },
  speedTextActive: {
    color: colors.white,
  },
});
